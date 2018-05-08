package com.siwoo.springblog.repository;

import com.siwoo.springblog.domain.Category;
import com.siwoo.springblog.domain.support.TopicList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-05 오후 6:41
 **/

public interface CategoryRepository extends JpaRepository<Category, Long>, CustomCategoryRepository {

    @Query("select c from Category c where upper(c.name) = upper(:name) ")
    Category findByName(@Param("name") String name);

    @Query("select new com.siwoo.springblog.domain.support.TopicList(c.name) from Category c")
    List<TopicList> findAllTopicList();

}
