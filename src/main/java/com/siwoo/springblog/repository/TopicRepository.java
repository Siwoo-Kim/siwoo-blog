package com.siwoo.springblog.repository;

import com.siwoo.springblog.domain.Category;
import com.siwoo.springblog.domain.Topic;
import com.siwoo.springblog.domain.support.TopicItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.lang.Nullable;

import java.util.List;
import java.util.Optional;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-06 오후 1:20
 **/

public interface TopicRepository extends JpaRepository<Topic, Long>, CustomTopicRepository {

    @Query("select t from Topic t where upper(t.category.name) = upper(:categoryName) ")
    List<Topic> findByCategoryName(@Param("categoryName") String categoryName);

    @Query("select t from Topic t where t.category = :category")
    List<Topic> findByCategory(@Param("category") Category category);

    @Query("select count(t) from Topic t where upper(t.category.name) = upper(:categoryName) ")
    Long countByCategoryName(@Param("categoryName") String categoryName);

    @Query("select new com.siwoo.springblog.domain.support.TopicItem(t.id, t.name) from Topic t where upper(t.category.name) = upper(:categoryName) ")
    List<TopicItem> findTopicItemByCategoryName(@Param("categoryName") String categoryName);


    @Query("select max(t.index) from Topic t where category = :category")
    Optional<Integer> findMaxIndexByCategory(@Param("category") Category category);

    @Query("select t from Topic t where category = :category and t.index = :indexValue")
    Topic findByIndexAndCategory(@Param("category") Category category, @Param("indexValue") Integer indexValue);

    @Query("select t from Topic t where t.category = :category and t.index = (select max(t2.index) from Topic t2 where t2.category = :category)")
    Topic findMaxIndexedTopicByCategory(@Param("category") Category category);

}
