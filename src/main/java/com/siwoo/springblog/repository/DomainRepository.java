package com.siwoo.springblog.repository;

import com.siwoo.springblog.domain.Domain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-05 오후 6:41
 **/

public interface DomainRepository extends JpaRepository<Domain, Long> {

    @Query("select d from Domain d where upper(d.name) = upper(:name) ")
    Domain findByName(@Param("name") String name);
}
