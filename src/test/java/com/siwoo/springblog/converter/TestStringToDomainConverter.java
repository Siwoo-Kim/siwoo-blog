package com.siwoo.springblog.converter;

import com.siwoo.springblog.domain.Domain;
import com.siwoo.springblog.repository.DomainRepository;
import com.siwoo.springblog.repository.TestRepositorySupporter;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-06 오전 9:11
 **/

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestStringToDomainConverter extends TestRepositorySupporter {

    @Autowired StringToDomainConverter converter;
    @Autowired DomainRepository repository;

    @Test
    public void convert() {
        Domain domain = new Domain();
        domain.setName("domain1");
        repository.save(domain);

        Domain converted = converter.convert(domain.getName());
        assertEquals(converted, domain);

        domain = new Domain();
        domain.setName("domain2");
        repository.save(domain);

        converted = converter.convert(domain.getName());
        assertEquals(converted, domain);
    }
}
