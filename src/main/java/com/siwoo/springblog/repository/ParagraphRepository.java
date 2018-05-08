package com.siwoo.springblog.repository;

import com.siwoo.springblog.domain.Paragraph;
import com.siwoo.springblog.domain.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-07 오후 1:50
 **/

public interface ParagraphRepository extends JpaRepository<Paragraph, Long> {

    @Query("select p from Paragraph p where p.topic = :topic")
    List<Paragraph> findByTopic(@Param("topic") Topic topic);

}
