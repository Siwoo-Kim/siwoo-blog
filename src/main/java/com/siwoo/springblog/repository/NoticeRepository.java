package com.siwoo.springblog.repository;

import com.siwoo.springblog.domain.Notice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-10 오후 4:13
 **/

public interface NoticeRepository extends JpaRepository<Notice, Long> {

    @Query("select n from Notice n order by n.basicDate.updated desc, n.basicDate.created desc")
    List<Notice> findAllOrderByRecent();

}
