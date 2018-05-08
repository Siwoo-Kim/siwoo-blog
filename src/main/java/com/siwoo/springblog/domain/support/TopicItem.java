package com.siwoo.springblog.domain.support;

import lombok.Data;
import lombok.Getter;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-06 오후 2:07
 **/

@Data
public class TopicItem {

    private Long id;
    private String name;

    public TopicItem(Long id, String name) {
        this.id = id;
        this.name = name;
    }

}
