package com.siwoo.springblog.web.rest;

import com.siwoo.springblog.domain.Domain;
import com.siwoo.springblog.repository.DomainRepository;
import com.siwoo.springblog.repository.TestRepositorySupporter;
import com.siwoo.springblog.support.fixture.FixtureProvider;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-05 오후 6:48
 **/

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class TestDomainController extends TestRepositorySupporter {

    private static String URL_ALL = "http://localhost:8080/rest/domain";
    TestRestTemplate restTemplate = new TestRestTemplate();
    @Autowired
    DomainRepository domainRepository;

    @Test
    public void all() {
        domainRepository.saveAll(FixtureProvider.domains());
        URI uri = UriComponentsBuilder.fromUriString(URL_ALL).build().toUri();
        List<Domain> domains = restTemplate.getForObject(uri, new ArrayList<Domain>().getClass());
        assertTrue(domains.size() == domainRepository.count());
    }

    @Test
    public void byName() {
        domainRepository.deleteAll();
        domainRepository.saveAll(FixtureProvider.domains());
        URI uri = UriComponentsBuilder.fromUriString(URL_ALL)
                .queryParam("by","name")
                .queryParam("value","guides")
                .build()
                .toUri();

        Domain domain = restTemplate.getForObject(uri, Domain.class);
        assertNotNull(domain);
        assertEquals(domainRepository.findByName("guides"), domain);
    }
}
