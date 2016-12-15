import re
import random
import urllib.request
import os
import webbrowser 

# def wiki_jump(url):

# 	jumps = eval(input('How Many jumps? '))
# 	base = 'http://en.wikipedia.org'

# 	for i in range(jumps):
# 		page = urllib.request.urlopen(url)
# 		contents = page.read().decode(errors='replace')
# 		page.close()

# 		links = re.findall('(?<= href=")/wiki/.+?(?=")', contents)
# 		link = random.choice(links)

# 		new_url=base+link

# 		print('Jumping from: ', url)
# 		print('To: ', new_url)
# 		print()
# 		webbrowser.open_new_tab(url)

# 		url = new_url
# wiki_jump(input('Where would you like to start? '))


def img_scrape(url):
	page = urllib.request.urlopen(url)
	contents = page.read().decode(errors='replace')
	page.close()
	# print(contents)
	# links = re.findall('(?<= src=").+?.jpg|(?<=<img).+?.png', contents)
	links = re.findall('(?<=img src=")http.+?.jpg|(?<=img src=")http.+?.png', contents)

	# link = random.choice(links)
	for link in links:
		urllib.request.urlretrieve(link, 'test.jpg')

		print(link)
img_scrape('http://www.bbc.com/news')

# urllib.request.urlretrieve('http://www.soic.indiana.edu/img/frontpage/Luddy-Hall.jpg', 'test.jpg')

