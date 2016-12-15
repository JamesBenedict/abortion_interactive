import re
import random
import urllib.request
# import bs4
from bs4 import BeautifulSoup
import requests
import re
import glob
import csv

import os
import webbrowser 
from bs4 import BeautifulSoup

def table_scrape(url):
	# page = urllib.request.urlopen(url)
	# contents = page.read().decode(errors='replace')
	# page.close()
	# # print(contents)
	# # links = re.findall('(?<= src=").+?.jpg|(?<=<img).+?.png', contents)
	# links = re.findall('(?<=<div class="table-story">).+(?=/div>)', contents)
	# print(links)
	# # # link = random.choice(links)
	# # for link in links:
	# # 	# urllib.request.urlretrieve(link, 'test.jpg')
	# # 	# webpage = open('webpage.txt', 'w').write(contents)
	# # 	print(link)


		# print(link)

	# download = url
	# output = 'table.txt'
	# # print(download)
	# try:
	# 	urllib.request.urlretrieve(download, output)
	# # some dates don't have any crimes, this deals with them
	# except urllib.error.URLError as e: ResponseData = e.read().decode("utf8", 'ignore')

	# url = "http://dofollow.netsons.org/table1.htm"  # change to whatever your url is

	page = urllib2.urlopen(url).read()
	soup = BeautifulSoup(page)

	# for i in soup.find_all('form'):
	#     print i.attrs['class']
	for tr in soup.find_all('tr')[2:]:
		tds = tr.find_all('td')
		print ("Nome: %s, Cognome: %s, Email: %s" % )
		(tds[0].text, tds[1].text, tds[2].text)
table_scrape('http://www.cdc.gov/mmwr/preview/mmwrhtml/ss6108a1.htm#Tab1')


