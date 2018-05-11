package com.siwoo.springblog.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

import javax.persistence.Embeddable;
import java.time.LocalDate;
import java.time.Period;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-10 오후 4:00
 **/


@Embeddable
@ToString
@Getter
@EqualsAndHashCode(of = {"created", "updated"})
public class BasicDate {

    private LocalDate created;
    private LocalDate updated;

    protected BasicDate() {
    }

    public BasicDate(LocalDate created, LocalDate updated) {
        this.created = created;
        this.updated = updated;
    }

    @JsonProperty("daysAgo")
    public int daysAgo() {
        if (created == null && updated == null) {
            return -1;
        }
        return updated == null ?
                Period.between(created, LocalDate.now()).getDays()
                : Period.between(updated, LocalDate.now()).getDays();
    }
}
