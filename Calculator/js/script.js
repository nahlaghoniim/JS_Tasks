let x, y;
x = prompt('Enter the first number');
y = prompt('Enter the second number');
x = parseInt(x);
y = parseInt(y);

document.write(`
    <table border="1">
        <tr>
            <th>num1</th>
            <th>op</th>
            <th>num2</th>
            <th>result</th>
        </tr>
        <tr>
            <td>${x}</td>
            <td>+</td>
            <td>${y}</td>
            <td>${x + y}</td>
        </tr>
        <tr>
            <td>${x}</td>
            <td>-</td>
            <td>${y}</td>
            <td>${x - y}</td>
        </tr>
        <tr>
            <td>${x}</td>
            <td>/</td>
            <td>${y}</td>
            <td>${x / y}</td>
        </tr>
        <tr>
            <td>${x}</td>
            <td>*</td>
            <td>${y}</td>
            <td>${x * y}</td>
        </tr>
        <tr>
            <td>${x}</td>
            <td>%</td>
            <td>${y}</td>
            <td>${x % y}</td>
        </tr>
        <tr>
            <td>${x}</td>
            <td>**</td>
            <td>${y}</td>
            <td>${x ** y}</td>
        </tr>
    </table>
`);
