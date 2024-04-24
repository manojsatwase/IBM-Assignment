/* QUESTION 4
YOUNGEST EMPLOYEES

There are two data tables with employee information: EMPLOYEE and EMPLOYEE_UIN.
Query the tables to generate a list of all employees who are less than 25 years old
first in order of NAME , the of ID, both ascending. The result should include the UIN followed by the NAME

Note: While the secondary sort is by ID , the result includes UIN but not ID.

Name         type
ID          Integer
NAME        string
AGE         Integer
ADRESSS     string
SALARY     Integer

*/

SELECT EMPLOYEE_UIN.UIN, EMPLOYEE.NAME
FROM EMPLOYEE
JOIN EMPLOYEE_UIN ON EPMLOYEE.ID = EMPLOYEE_UIN.ID
WHERE TIMESTAMPDIFF(YEAR,EMPLOYEE.BIRTHDAY,CURDATE()) < 25
ORDER BY EMPLOYEE.NAME ASC , EMPLOYEE.ID ASC;