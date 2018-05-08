package com.siwoo.springblog.domain.support;

import com.siwoo.springblog.domain.support.TopicItem;
import lombok.Data;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-06 오후 1:56
 **/

@Data
public class TopicList {

    private String categoryName;
    private List<TopicItem> topicItems = new ArrayList<>();

    public TopicList(String categoryName) {
        this.categoryName = categoryName;
    }

}
