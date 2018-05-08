package com.siwoo.springblog.repository;

import com.siwoo.springblog.domain.Domain;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertTrue;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-06 오전 9:07
 **/

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestDomainRepository extends TestRepositorySupporter{

    @Autowired DomainRepository domainRepository;

    @Test
    public void findByName() {
        Domain domain1 = new Domain();
        domain1.setName("domain1");
        domainRepository.save(domain1);
        Domain domain2 = new Domain();
        domain2.setName("domain2");
        domainRepository.save(domain2);

        Domain found = domainRepository.findByName(domain1.getName());
        assertTrue(domain1.equals(found));

        found = domainRepository.findByName(domain2.getName());
        assertTrue(domain2.equals(found));
    }
}
