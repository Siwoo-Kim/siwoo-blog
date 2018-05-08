package com.siwoo.springblog.support;

import com.siwoo.springblog.support.fixture.FixtureProvider;
import org.junit.Test;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-05 오후 6:42
 **/

public class TestFixtureProvider {

    @Test
    public void domains() {
        assertNotNull(FixtureProvider.domains());
        assertFalse(FixtureProvider.domains().isEmpty());
        assertNotNull(FixtureProvider.categories());
        assertFalse(FixtureProvider.categories().isEmpty());
    }
}
