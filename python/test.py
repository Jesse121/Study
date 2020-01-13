import requests
from bs4 import BeautifulSoup
import os

def getHtmlurl(url): #通过网址获取html内容
    try:
        r=requests.get(url)
        r.raise_for_status()
        r.encoding=r.apparent_encoding
        return r.text
    except:
        return ""

def getpic(html): #获取图片地址并下载
    soup =BeautifulSoup(html,'html.parser')
    # all_img=soup.find('ul',class_='pli').find_all('img')
    all_img=soup.find_all('img')
    for img in all_img:
        img_url=img['src']
        root='./pic/'
        path = root + img_url.split('/')[-1].split('?')[0]
        try:                              #创建或判断路径图片是否存在并下载
            if not os.path.exists(root):
                os.mkdir(root)
            if not os.path.exists(path):
                r = requests.get(img_url)
                with open(path, 'wb') as f:
                    f.write(r.content)
                    f.close()
                    print("文件保存成功")
            else:
                print("文件已存在")
        except:
            print("爬取失败")



def main():
    url='http://www.ivsky.com/bizhi/yourname_v39947/'
    html=(getHtmlurl(url))
    # print(html)
    print(getpic(html))

main()
