package com.siwoo.springblog.converter;

import com.siwoo.springblog.domain.Domain;
import com.siwoo.springblog.repository.DomainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-06 오전 9:06
 **/

@Component
public class StringToDomainConverter implements Converter<String, Domain> {

    @Autowired
    DomainRepository domainRepository;

    @Override
    public Domain convert(String source) {
        return domainRepository.findByName(source);
    }

}
