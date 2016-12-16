#! /usr/bin/env python3
print('Content-type: text/html\n')

# James Benedict
# Group 5
# Group work 3
# Dec 1, 2016
import cgi, MySQLdb

form = cgi.FieldStorage()   #parses form data


html = """
<!doctype html>
<html>
<head><meta charset="utf-8">
<title>Form in CGI</title></head>
    <body>
        <h2>Thank you for adding your information.</h2>
        <h2>Search for other users below. </h2>
        <form method='get' action ='jabenedi_A3_group.cgi'>
            <input type = 'text' name ='nameSearch' placeholder ='Lookup name'>
            <button type ='submit'>Submit</button>
        </form>        
    </body>
</html>"""

html2 = """
       <table>
            <tr></tr>
        {content}
       </table>
        
"""

form = cgi.FieldStorage()

username = form.getfirst('username','nameholder')
address1 = form.getfirst('address1', 'address1holder')
address2 = form.getfirst('address2', 'NULL')
city = form.getfirst('city', 'cityholder')
state = form.getfirst('state', 'stateholder')
zip = form.getfirst('zipcode', 'zipholder')
# sql_insert = ('')
# print(html.format(content = city))


string = "i211f16_jabenedi"             

password = "my+sql=i211f16_jabenedi"    

db_con = MySQLdb.connect(host="db.soic.indiana.edu", port = 3306, user=string, passwd=password, db=string)

cursor = db_con.cursor()
# print('Connection Successful!')

try:                
    if address2 == 'Null':
        SQL = "insert into addresses (Name, Address1, City, State, Zip)"
        SQL += " values ('" + username + "','" + address1 + "','" + city + "','" + state + "','" + zip + "');"
    else:
        SQL = "insert into addresses (Name, Address1, Address2, City, State, Zip)"
        SQL += " values ('" + username + "','" + address1 + "','" + address2 + "','" + city + "','" + state + "','" + zip + "');"
    cursor.execute(SQL)
    db_con.commit()

except Exception as e:      
    print('<p>Something went wrong with the SQL insert!</p>')
    print(SQL, "Error:", e)
else:               
    print(html.format(content = 'yo'))

namesearch = form.getfirst('nameSearch', 'nameSearchHolder')


if namesearch == 'nameSearchHolder':
    print(html2.format(content = 'Please search a name'))
    
else:
    try:                
        SQL2 = "select * from addresses Where Name='" +namesearch + "';"
        # SQL2 = 'select * from addresses where Name ==' + namesearch + ';'
        cursor.execute(SQL2)
        results = cursor.fetchall()
       # db_con.commit()
    except Exception as e:      
        print('<p>Something went wrong with the SQL lookup!</p>')
        print(SQL, "Error:", e)
    else:
        table = ""
        if len(results) > 0:
            table += "<tr><th>Name</th><th>Address</th><th>City</th><th>Zip</th></tr>"

            for row in results:
                table += '<tr>'
                for entry in row:
                    table += '<td>' + str(entry) + '</td>'
                table += '</tr>'
        else:
            table += 'Name was not found'

   

        print(html2.format(content = table))


