package com.siwoo.springblog.domain;

import com.siwoo.springblog.domain.support.ParagraphException;
import org.junit.Test;

import java.util.Arrays;
import java.util.HashSet;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-07 오후 1:23
 **/


public class TestParagraph {

    @Test
    public void hasChildren() {
        Paragraph paragraph = new Paragraph();
        assertFalse(paragraph.hasChildren());

        paragraph.addChildren(new Paragraph());
        assertTrue(paragraph.hasChildren());
    }

    @Test
    public void setParent() {
        Paragraph parent = new Paragraph();
        Paragraph child1 = new Paragraph();
        Paragraph child2 = new Paragraph();
        child1.setParent(parent);
        child2.setParent(parent);

        assertTrue(child1.getParent().equals(parent));
        assertTrue(child2.getParent().equals(parent));
        assertTrue(parent.isChild(child1));
        assertTrue(parent.isChild(child2));
    }

    @Test
    public void addChildren() {
        Paragraph parent = new Paragraph();
        Paragraph child1 = new Paragraph();
        Paragraph child2 = new Paragraph();
        parent.addChildren(child1);
        parent.addChildren(child2);

        assertTrue(parent.isChild(child1));
        assertTrue(parent.isChild(child2));
        assertTrue(parent.hasChildren());
        assertTrue(child1.isParent(parent));
        assertTrue(child2.isParent(parent));
    }

    @Test(expected = ParagraphException.class)
    public void twoLevelDeep() {
        Paragraph parent = new Paragraph();
        Paragraph child1 = new Paragraph();
        child1.setName("child1");
        Paragraph child2 = new Paragraph();
        child2.setName("child2");
        Paragraph parent2 = new Paragraph();
        parent2.setName("parent2");
        Paragraph child3 = new Paragraph();
        Paragraph grandChild = new Paragraph();
        Paragraph grandFather = new Paragraph();

        parent.addChildren(child1);
        parent.addChildren(child2);
        parent2.addChildren(child3);

//        child1.addChildren(grandChild);
//        fail();

//        parent.setParent(grandFather);
//        fail();

        parent.setChildren(new HashSet<>(Arrays.asList(child1, child2, parent2)));

        fail();
    }

    @Test
    public void setChildren() {
    }


}
