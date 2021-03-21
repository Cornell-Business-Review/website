# <img src="https://i.imgur.com/8eop9wn.png" width="10%">&nbsp;Cornell Business Review Website

## Setting Up Your Environment

#### Installing WordPress
* Create an empty directory on your computer to store this project
* Download [WordPress](https://wordpress.org/download/) from here
* Unzip the download and place all the unzipped files into the directory you created earlier

#### Installing MAMP
* Download [MAMP](https://www.mamp.info/en/downloads/) from here
* Once installed, open MAMP (not MAMP Pro)
* Go to ```MAMP > Preferences > Web Server > Select``` and select your project directory, then click OK
* Click on ```Start Servers```
* Once the button turns green, a new tab should open in your browser, if not click ```Open WebStart page```
* Your tab should have the Welcome to MAMP message along with your version number (5.7 as of this writing)

#### Connecting MAMP to Your Project Directory
* In MAMP, click on ```Open WebStart page``` and on the welcome page tab in your browser and click on the link that says ```phpMyAdmin```
* In the newly opened page, click on the ```Databases``` tab
* Under ```Create database``` enter the name of your database and click ```Create```
* You can now close this tab

#### Setting Up WordPress
* In a new tab, go to ```localhost:8888```
* From there you should be prompted to select a language and choose a database name (which should have the same name as the one that you created in phpMyAdmin, username: root, password: root, leaving everything else the same
* After that you have to enter a site title and set up login credentials for your local WordPress website (which you must remember) 
* Finally, you should be able to access the WordPress backend console

## Starting Up Your Environment
To get your environment up and running:
* Launch MAMP and click on ```Start Servers```
* In a new tab, go to ```localhost:8888/wp-admin```
* Enter your WordPress credentials

## Setting Up Version Control
To keep in sync with this remote repository:
* Navigate to your project directory using the command line
* Run the command ```git clone https://github.com/Cornell-Business-Review/website.git```, which downloads a new folder named ```website```
* Delete your existing ```wp-content``` folder from the project directory
* Rename the newly downloaded folder (named ```website```) to ```wp-content```
* You only need to do the above steps once, after that you can run ```git pull``` from the command line to merge in new changes and ```git push``` to push your new changes
* Note: we will only be working with the ```wp-content``` folder and its contents for version control, all other files are core code which should not be touched or pushed to this repo

## Authors

* [**Rishik Zaparde**](https://github.com/rishikzap)
* [**Kartikay Jain**](https://github.com/kj295)
* [**Jae Kim**](https://github.com/jaekim123)



See also the list of [contributors](https://github.com/orgs/Cornell-Business-Review/people) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details


