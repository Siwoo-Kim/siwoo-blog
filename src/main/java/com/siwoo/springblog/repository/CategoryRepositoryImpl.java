package com.siwoo.springblog.repository;

import com.siwoo.springblog.domain.Category;
import com.siwoo.springblog.domain.support.CategorySearch;

import static com.siwoo.springblog.domain.support.CategorySearch.Type;
import static com.siwoo.springblog.domain.support.CategorySearch.Type.*;

import org.springframework.stereotype.Repository;

import static com.siwoo.springblog.repository.support.RepositorySupporter.*;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-07 오후 6:07
 **/

@Repository
public class CategoryRepositoryImpl implements CustomCategoryRepository {

    public static final String COL_NAME = "name";
    public static final String COL_DESCRIPTION = "description";
    public static final String COL_SHORT_DESCRIPTION = "shortDescription";
    public static final String COL_TYPE = "type";

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Category> searchAny(CategorySearch search) {
        if (search.isEmpty()) {
            return new ArrayList<>();
        }

        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Category> query = cb.createQuery(Category.class);
        Root<Category> root = query.from(Category.class);

        Predicate criteria = cb.disjunction();
        String value = search.getValue();

        for (Type type : search.getTypes()) {
            switch (type) {
                case NAME: {
                    criteria =
                            cb.or(criteria,
                                cb.like(
                                    cb.upper(root.get(COL_NAME)),
                                        concatWildcard(value.toUpperCase(), "%")));
                    break;
                }
                case DESCRIPTION: {
                    criteria =
                            cb.or(criteria,
                                    cb.like(
                                            cb.upper(root.get(COL_DESCRIPTION)),
                                            concatWildcard(value.toUpperCase(), "%")));
                    break;
                }
                case SHORT_DESCRIPTION: {
                    criteria =
                            cb.or(criteria,
                                    cb.like(
                                            cb.upper(root.get(COL_SHORT_DESCRIPTION)),
                                            concatWildcard(value.toUpperCase(), "%")));
                    break;
                }
            }
        }

        return entityManager
                .createQuery(query.where(criteria))
                .getResultList();
    }
}
