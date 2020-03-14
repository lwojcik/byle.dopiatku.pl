package pl.dopiatku.byle.api;

import org.joda.time.DateTime;
import org.joda.time.DateTimeConstants;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;



@RestController
public class IsItFriday {

    private static final String DATE_PATTERN = "dd/MM/yyyy";
    private static final String DAY_DATE_PATTERN = "dd";

    @RequestMapping("/")
    public String rootContext() {
        return "Yup?";
    }

    @RequestMapping("/IsItFriday")
    public String isItFryday() {
        if (isFriday()) {
            return simpleJson(true);
        }
        return simpleJson(false);
    }

    @RequestMapping("/AllFridays")
    public String allFridays() {
        return fridayList();
    }

    @RequestMapping("/CalendarProps")
    public String calendarProps() {
        return calendarPropsResults();
    }

    @RequestMapping("/coffey")
    @ResponseStatus(HttpStatus.I_AM_A_TEAPOT)
    public String coffey() {
        return "I am a teapot!";
    }

    private boolean isFriday() {
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Date());
        return cal.get(Calendar.DAY_OF_WEEK) == Calendar.FRIDAY;
    }

    private String fridayList() {

        DateTimeFormatter pattern = DateTimeFormat.forPattern(DATE_PATTERN);
        SimpleDateFormat dateFormat= new SimpleDateFormat(DATE_PATTERN);

        Calendar cS = Calendar.getInstance();
        Calendar cE = Calendar.getInstance();
        cS.setTime(new Date());
        cE.setTime(new Date());
        cS.set(Calendar.DAY_OF_MONTH,1);
        cS.set(Calendar.MONTH,0);
        cE.set(Calendar.DAY_OF_MONTH,31);
        cE.set(Calendar.MONTH,11);

        String start = dateFormat.format(cS.getTime());
        String end = dateFormat.format(cE.getTime());

        DateTime startDate = pattern.parseDateTime(start);
        DateTime endDate = pattern.parseDateTime(end);

        StringBuilder sb = new StringBuilder();
        sb.append("{\"friday\": [");

        boolean reachedAFriday = false;
        while (startDate.isBefore(endDate)) {
            if (startDate.getDayOfWeek() == DateTimeConstants.FRIDAY) {
                sb.append("\"" + dateFormat.format(startDate.toDate())  + "\",");
                reachedAFriday = true;
            }
            if (reachedAFriday) {
                startDate = startDate.plusWeeks(1);
            } else {
                startDate = startDate.plusDays(1);
            }
        }
        sb.deleteCharAt(sb.lastIndexOf(","));
        sb.append("] }");
        return sb.toString();
    }

    /**
     * @return interface CalendarProps {
     * year: number; // aktualny rok
     * month: number; // aktualny miesiąc
     * day: number; // aktualny dzień
     * firstFriday: number; // numer dnia miesiąca, w którym wypada pierwszy piątek aktualnego roku
     * }
     */
    private String calendarPropsResults() {
        StringBuilder sb = new StringBuilder();
        sb.append("{");

        Calendar cal = Calendar.getInstance();
        cal.setTime(new Date());

        int month = cal.get(Calendar.MONTH);
        month += 1;
        sb.append("\"year\":" + cal.get(Calendar.YEAR) + ",");
        sb.append("\"month\":" + month + ",");
        sb.append("\"day\":" + cal.get(Calendar.DAY_OF_MONTH) + ",");
        sb.append("\"firstFriday\":" + firstFridayOfMonth(cal));
        sb.append("}");
        return sb.toString();
    }

    private int firstFridayOfMonth(Calendar calendar) {
        calendar.set(Calendar.DAY_OF_MONTH, 1);

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(DATE_PATTERN);
        SimpleDateFormat dayFormat = new SimpleDateFormat(DAY_DATE_PATTERN);
        String start = simpleDateFormat.format(calendar.getTime());
        DateTimeFormatter pattern = DateTimeFormat.forPattern(DATE_PATTERN);
        DateTime startDate = pattern.parseDateTime(start);

        while (true) {
            if (startDate.getDayOfWeek() == DateTimeConstants.FRIDAY) {
                return Integer.valueOf(dayFormat.format(startDate.toDate()));
            }
            startDate = startDate.plusDays(1);
        }

    }

    private String simpleJson(boolean isIt){
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        sb.append("\"isItFriday\":" + isIt );
        sb.append("}");
        return sb.toString();
    }
}