package com.siwoo.springblog.repository;

import com.siwoo.springblog.domain.Category;
import com.siwoo.springblog.domain.support.CategorySearch;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-07 오후 6:07
 **/

@Transactional(readOnly = true)
public interface CustomCategoryRepository {

    List<Category> searchAny(CategorySearch search);

}
