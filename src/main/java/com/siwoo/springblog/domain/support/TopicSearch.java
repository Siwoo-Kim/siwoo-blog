package com.siwoo.springblog.domain.support;

import lombok.Getter;
import lombok.ToString;
import org.springframework.util.StringUtils;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-07 오후 6:44
 **/

@Getter
@ToString
public class TopicSearch {

    private String value;
    private boolean empty;
    private Set<Type> types;

    public TopicSearch(String value, Type... types) {
        if (!StringUtils.hasText(value) ||
                types == null ||
                types.length == 0) {
            this.empty = true;
            return;
        }
        initTypes(types);
        this.value = value;
        this.empty = false;
    }

    private void initTypes(Type... types) {
        Set<Type> set = new HashSet<>(Arrays.asList(types));
        if (set.contains(Type.ALL)) {
            this.types = new HashSet<>(Arrays.asList(Type.values()));
        } else {
            this.types = new HashSet<>(Arrays.asList(types));
        }
    }

    public enum Type {
        NAME, DESCRIPTION, SHORT_DESCRIPTION,
        PARAGRAPH_NAME, PARAGRAPH_DESCRIPTION, ALL
    }
}
