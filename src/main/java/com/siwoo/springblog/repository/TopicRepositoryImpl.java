package com.siwoo.springblog.repository;

import com.siwoo.springblog.domain.Paragraph;
import com.siwoo.springblog.domain.Topic;
import com.siwoo.springblog.domain.support.TopicSearch;
import static com.siwoo.springblog.domain.support.TopicSearch.Type;
import static com.siwoo.springblog.domain.support.TopicSearch.Type.*;
import static com.siwoo.springblog.repository.support.RepositorySupporter.*;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-07 오후 6:50
 **/

@Repository
public class TopicRepositoryImpl implements CustomTopicRepository {

    public static final String COL_NAME = "name";
    public static final String COL_DESCRIPTION = "description";
    public static final String COL_PARAGRAPHS = "paragraphs";
    public static final String COL_SHORT_DESCRIPTION = "shortDescription";
    public static final String COL_PARAGRAPH_NAME = "name";
    public static final String COL_PARAGRAPH_DESCRIPTION = "description";


    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Topic> searchAny(TopicSearch search) {
        if(search.isEmpty()) { return new ArrayList<>(); }

        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Topic> query = cb.createQuery(Topic.class);
        Root<Topic> topicRoot = query.from(Topic.class);
        Join<Topic,Paragraph> paragraphJoin = topicRoot.join(COL_PARAGRAPHS, JoinType.INNER);

        String value = search.getValue();
        Predicate criteria = cb.disjunction();

        System.out.println(search.getTypes());
        for (Type type: search.getTypes()) {
            switch (type) {
                case PARAGRAPH_NAME: {
                    criteria =
                            cb.or(criteria,
                                    cb.like(cb.upper(paragraphJoin.get(COL_PARAGRAPH_NAME)),
                                            concatWildcard(value.toUpperCase(), "%")));
                    break;
                }
                case PARAGRAPH_DESCRIPTION: {
                    criteria =
                            cb.or(criteria,
                                    cb.like(cb.upper(paragraphJoin.get(COL_PARAGRAPH_DESCRIPTION)),
                                            concatWildcard(value.toUpperCase(), "%")));
                    break;
                }
                case NAME: {
                    criteria =
                            cb.or(criteria,
                                cb.like(cb.upper(topicRoot.get(COL_NAME)),
                                    concatWildcard(value.toUpperCase(), "%")));
                    break;
                }
                case DESCRIPTION: {
                    criteria =
                            cb.or(criteria,
                                    cb.like(cb.upper(topicRoot.get(COL_DESCRIPTION)),
                                            concatWildcard(value.toUpperCase(), "%")));
                    break;
                }
                case SHORT_DESCRIPTION: {
                    criteria =
                            cb.or(criteria,
                                    cb.like(cb.upper(topicRoot.get(COL_SHORT_DESCRIPTION)),
                                            concatWildcard(value.toUpperCase(), "%")));
                    break;
                }
            }
        }

        return entityManager
                .createQuery(query.distinct(true).where(criteria))
                .getResultList();
    }
}
