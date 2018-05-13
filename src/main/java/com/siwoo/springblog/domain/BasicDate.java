package com.siwoo.springblog.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

import javax.persistence.Embeddable;
import java.text.MessageFormat;
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
    static final String DAYS_AGO_PATTERN =  "{0} years, {1} months, {2} days ago";

    private LocalDate created;
    private LocalDate updated;

    protected BasicDate() {
    }

    public BasicDate(LocalDate created, LocalDate updated) {
        this.created = created;
        this.updated = updated;
    }


    public BasicDate(LocalDate created) {
        this.created = created;
        this.updated = null;
    }

    @JsonProperty
    public LocalDate lastUpdated() {
        return updated != null ? updated : created;
    }

    @JsonProperty("daysAgo")
    public String daysAgo() {
        if( lastUpdated() != null) {
            Period period = Period.between(lastUpdated(), LocalDate.now());
            return MessageFormat.format(DAYS_AGO_PATTERN, period.getYears(), period.getMonths(), period.getDays());
        } else {
            return "Time not saved";
        }
    }

}
