#! /usr/bin/env python3
print('Content-type: text/html\n')

# James Benedict
# Group 5
# Group work 3
# Dec 1, 2016
import cgi, MySQLdb

form = cgi.FieldStorage()   #parses form data


jordan_html = """
<!doctype html>
<html>
<head><meta charset='utf-8'>
<title>Abortion Interactive</title>

    <link rel='stylesheet' href='css/reset.css'>
    <link rel='stylesheet' href='css/interactive.css'>
        <link rel='stylesheet' href='css/universal.css'>

    
</head>
<body>
    <h2>Researching your options in {city}</h2>
    <p>You find out you&apos;re pregnant and your heart drops. You know you want to terminate the pregnancy as soon as possible. You search online for nearby clinics.</p>

    <h4>Clinic hours</h4>
    <ul>
        <li>Monday / Tuesday 8AM-4PM</li>
        <li>Wednesday / Thursday 8AM - 3PM </li>
    </ul>
    <figure class='map'>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391498.56226464186!2d-86.20879590499814!3d39.95072710814197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae06b59be2e1ba1a!2sPlanned+Parenthood+-+Georgetown+Health+Center!5e0!3m2!1sen!2sus!4v1481930005811' width='100%' height='300px' frameborder='0' style='border:0'  padding='0' margin='0' allowfullscreen></iframe>
    </figure>

    <p>The clinic nearest you is XXXX away and will take XX hours by car. Their available hours are listed below. We can find you another clinic if you want using the button above. Once you find a clinic, scroll to your insurance below. </p>

     <form method='get' action='interactive.cgi'>
        <button type='submit' class='contiune'>
            <div class='text'>
                <h3 class='hidden'><input type='radio' name='contiune' placeholder='contiune_holder' value='contiune' checked> Contiune</h3>
                <h3>Contiune</h3>
            </div> 
        </button>
    </form>

</body></html>


"""

emma_html = """
<!doctype html>
<html>
<head><meta charset='utf-8'>
<title>Abortion Interactive</title>

    <link rel='stylesheet' href='css/reset.css'>
    <link rel='stylesheet' href='css/interactive.css'>
        <link rel='stylesheet' href='css/universal.css'>

    
</head>
<body>
    <h2>Researching your options in {city}</h2>
    <p>You find out your&apos;e pregnant and your heart drops. You know you want to terminate the pregnancy as soon as possible. You search online for nearby clinics.</p>

   
<h4>Clinic hours</h4>
    <ul>
        <li>Monday 9AM-5PM</li>
        <li> Tuesday 10AM-7Pm </li>
        <li>Thursday 8:30AM-2:30PM</li>
    </ul>
    <figure class='map'>
        
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.786788088636!2d-85.19430168487729!3d41.07365297929421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8815e69ce3c1d38f%3A0xa5c7e8a36151b022!2sPlanned+Parenthood+-+Fort+Wayne+Health+Center!5e0!3m2!1sen!2sus!4v1481927974845' width='100%' height='300px' frameborder='0' style='border:0'  padding='0' margin='0' allowfullscreen></iframe>
    </figure>

    <p>The clinic nearest you is XXXX away and will take XX hours by car. Their available hours are listed below. We can find you another clinic if you want using the button above. Once you find a clinic, scroll to your insurance below. </p>

     <form method='get' action='interactive.cgi'>
        <button type='submit' class='contiune'>
            <div class='text'>
                <h3 class='hidden'><input type='radio' name='contiune' placeholder='contiune_holder' value='contiune' checked> Contiune</h3>
                <h3>Contiune</h3>
            </div> 
        </button>
    </form>   
</body>
</html>
"""

leah_html = """
<!doctype html>
<html>
<head><meta charset='utf-8'>
<title>Abortion Interactive</title>

    <link rel='stylesheet' href='css/reset.css'>
    <link rel='stylesheet' href='css/interactive.css'>
        <link rel='stylesheet' href='css/universal.css'>

    
</head>
<body>
    <h2>Researching your options in {city}</h2>
    <p>You find out you&apos;re pregnant and your heart drops. You know you want to terminate the pregnancy as soon as possible. You search online for nearby clinics.</p>

    <h4>Clinic hours</h4>
    <ul>
        <li>Tuesday 11:30AM-7PM</li>
        <li>Friday 9AM-5PM </li>
    </ul>
    <figure class='map'>


        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.482519532108!2d-85.9219236849412!3d39.231916979520435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ba0176fe05513%3A0xc70f51b18d253245!2sPlanned+Parenthood+-+Columbus+Health+Center!5e0!3m2!1sen!2sus!4v1481930165270' width='100%' height='300px' frameborder='0' style='border:0'  padding='0' margin='0' allowfullscreen></iframe>
    </figure>

    <p>The clinic nearest you is XXXX away and will take XX hours by car. Their available hours are listed below. We can find you another clinic if you want using the button above. Once you find a clinic, scroll to your insurance below. </p>

     <form method='get' action='interactive.cgi'>
        <button type='submit' class='contiune'>
            <div class='text'>
                <h3 class='hidden'><input type='radio' name='contiune' placeholder='contiune_holder' value='contiune' checked> Contiune</h3>
                <h3>Contiune</h3>
            </div> 
        </button>
    </form>

</body></html>


"""




# print(html.format(content = city))
# string = "i211f16_jabenedi"             
# password = "my+sql=i211f16_jabenedi"    
# db_con = MySQLdb.connect(host="db.soic.indiana.edu", port = 3306, user=string, passwd=password, db=string)
# cursor = db_con.cursor()

# try:                
#     if character == 'Leah':
#         SQL = "insert into addresses (Name, Address1, City, State, Zip)"
#         SQL += " values ('" + username + "','" + address1 + "','" + city + "','" + state + "','" + zip + "');"
#     else:
#         SQL = "insert into addresses (Name, Address1, Address2, City, State, Zip)"
#         SQL += " values ('" + username + "','" + address1 + "','" + address2 + "','" + city + "','" + state + "','" + zip + "');"
#     cursor.execute(SQL)
#     db_con.commit()
# except Exception as e:      
#     print('<p>Something went wrong with the SQL insert!</p>')
#     print(SQL, "Error:", e)
# else:               
#     print(html.format(content = 'yo'))


form = cgi.FieldStorage()
character = form.getfirst('character','Emma')

if character == 'Leah':
    print(leah_html.format(city = 'Columbus, Indiana'))
    
elif character == "Jordan":
     print(jordan_html.format(city = 'Fishers, Indiana'))
elif character == "Emma":
    print(emma_html.format(city = 'Ft. Wayne, Indiana'))
else:
    print(html.format(city = 'A step-by-step look at abortions in Indiana'))

contiune = form.getfirst('contiune','contiune')
    print


    # try:                
    #     SQL2 = "select * from addresses Where Name='" +namesearch + "';"
    #     # SQL2 = 'select * from addresses where Name ==' + namesearch + ';'
    #     cursor.execute(SQL2)
    #     results = cursor.fetchall()
    #    # db_con.commit()
    # except Exception as e:      
    #     print('<p>Something went wrong with the SQL lookup!</p>')
    #     print(SQL, "Error:", e)
    # else:
    #     table = ""
    #     if len(results) > 0:
    #         table += "<tr><th>Name</th><th>Address</th><th>City</th><th>Zip</th></tr>"

    #         for row in results:
    #             table += '<tr>'
    #             for entry in row:
    #                 table += '<td>' + str(entry) + '</td>'
    #             table += '</tr>'
    #     else:
    #         table += 'Name was not found'

   

        

