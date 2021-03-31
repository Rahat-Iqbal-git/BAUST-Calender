#include<stdio.h>
#include<windows.h>

#define TRUE    1
#define FALSE   0
char webarticle;


char printableversion;

int days_in_month[]={0,31,28,31,30,31,30,31,31,30,31,30,31};
char *months[]=
{
	" ",
	"\n\n\n\t\tJanuary",
	"\n\n\n\t\tFebruary",
	"\n\n\n\t\tMarch",
	"\n\n\n\t\tApril",
	"\n\n\n\t\tMay",
	"\n\n\n\t\tJune",
	"\n\n\n\t\tJuly",
	"\n\n\n\t\tAugust",
	"\n\n\n\t\tSeptember",
	"\n\n\n\t\tOctober",
	"\n\n\n\t\tNovember",
	"\n\n\n\t\tDecember"
};

int front();
int inputyear(void);
int determinedaycode(int year);
int determineleapyear(int year);
void calendar(int year, int daycode);
int repeat();
int mainmenu();
int main2(void);
int holidaylist();
int jumptodate();

int inputyear_forsearching(void);
int determinedaycode_forsearching(int year);
int determineleapyear_forsearching(int year);
void calendar_forsearching(int year, int daycode);
int main3();
int regularday();
int motherlanguageday();
int buddhijibidibosh();
int christmasday();
int victoryday();
int mourningday();
int mayday();
int newyr();
int independenceday();
int sheikhmujibur();
int univerday();








int main(void)
{
    int year, daycode, leapyear,choice;
    system("COLOR 3F");

    front();
    mainmenu();

    scanf("%d",&choice);
    if(choice==1)
        {   year = inputyear();
            daycode = determinedaycode(year);
            determineleapyear(year);
            calendar(year, daycode);
            printf("\n");
        }

	else if(choice==2)
        {
            jumptodate();
            repeat();
        }

    else if (choice == 3)
    {
        printables();
    }
    else if (choice == 4)
    {
        about();
    }

    else
    {
        wronginput();
        menuselection();

    }
}

int wronginput()
{
    int q,w;
    system("cls");
    printf("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t Ooops !! Something went wrong.");
    for(q=1;q<52311;q++)
        for(w=1;w<12331;w++)
    {

    }
    return 0;
}

int menuselection()
{
    int year, daycode, leapyear,choice;
    system("COLOR 3F");
    mainmenu();
    scanf("%d",&choice);
    if(choice==1)
        {   year = inputyear();
            daycode = determinedaycode(year);
            determineleapyear(year);
            calendar(year, daycode);
            printf("\n");
        }

	else if(choice==2)
        {
            jumptodate();
            repeat();
        }

    else if(choice == 3)
    {
        about();
    }

    else
        {   wronginput();
            menuselection();
        }

}


int front()
{
    printf("\n\n\n\n\n\n");

    printf("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    printf("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    printf("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    printf("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    printf("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    printf("\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t       BAUST \n\n\n\t\t\t\t\t\t\t\t\t      Calendar");

    printf("\n\n\n\n\n\n\n\n\n\n\n\n\n");

    printf("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    printf("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    printf("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    printf("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    printf("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");

    int q,w;
    for(q=1;q<82311;q++)
        for(w=1;w<22331;w++){}

}




int repeat()
{
    int q,w;
    char goback;
    printf("\n\n\n\t\tPress 'm'to go back to main menu. If you want to exit, just press any other key. ");
    goback=getche();
    if(goback=='m'|| goback=='M')
        main2();
    else
    {
        system("cls");
        printf("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t Thanks for using BAUST Calendar.");
        for(q=1;q<52311;q++)
        for(w=1;w<12331;w++){}

        system("cls");
        printf("\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t Hope to see you again. Hasta La Vista !");
        for(q=1;q<52311;q++)
        for(w=1;w<22331;w++){}

        system("cls");
        return 0;


    }
}



int inputyear(void)
{
	int year;
	    system("cls");
	printf("\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\tPlease enter a year (example: 1999) : ");
	scanf("%d", &year);
	return year;
}

int determinedaycode(int year)
{
	int daycode;
	int d1, d2, d3;

	d1 = (year - 1.)/ 4.0;
	d2 = (year - 1.)/ 100.;
	d3 = (year - 1.)/ 400.;
	daycode = (year + d1 - d2 + d3) %7;
	return daycode;
}


int determineleapyear(int year)
{
	if(year% 4 == FALSE && year%100 != FALSE || year%400 == FALSE)
	{
		days_in_month[2] = 29;
		return TRUE;
	}
	else
	{
		days_in_month[2] = 28;
		return FALSE;
	}
}

void calendar(int year, int daycode)
{
	system("COLOR 0F");
	HANDLE color;
    color = GetStdHandle(STD_OUTPUT_HANDLE);
    SetConsoleTextAttribute(color,15);

	int month, day;
	for ( month = 1; month <= 12; month++ )
	{
		printf("%s", months[month]);
		printf("\n\nSun  Mon  Tue  Wed  Thu  Fri  Sat\n" );

		// Correct the position for the first date
		for ( day = 1; day <= 1 + daycode * 5; day++ )
		{
			printf(" ");
		}

		// Print all the dates for one month
		for ( day = 1; day <= days_in_month[month]; day++ )
		{

                if(( day + daycode ) % 7 == 6||( day + daycode ) % 7 == 0 || month == 2 && day == 21  || month == 3 && day == 17  ||  month == 3 && day ==26 || month == 4 && day ==14 || month == 5 && day ==1 || month == 5 && day == 10 || month == 7 && day == 1 || month == 8 && day == 14  || month == 8 && day == 15 || month == 9 && day == 30 || month == 12 && day == 16 || month == 12 && day == 25 || month == 12 && day == 31 )
                    {
                        SetConsoleTextAttribute(color,14);
                    }
                printf("%2d", day );

                SetConsoleTextAttribute(color,15);

			// Is day before Sat? Else start next line Sun.
			if ( ( day + daycode ) % 7 > 0 )
				printf("   " );
			else
                {
				printf("\n " );

                }
		}
			// Set position for next month
			daycode = ( daycode + days_in_month[month] ) % 7;
	}

	repeat();
}

int mainmenu()
{
    system("cls");
    system("COLOR 3F");
    int a,i;

    printf("\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t  1. View Calender");
    printf("\n\n\n\t\t\t\t\t\t\t\t  2. Jump to date");
    printf("\n\n\n\t\t\t\t\t\t\t\t  3. Others");
    printf("\n\n\n\t\t\t\t\t\t\t\t  4. About");
    printf("\n\n\n\n\t\t\t\t\t\t\t\tHow can it help you? Enter your choice :");

}


int main2(void)
{


    int year, daycode, leapyear,choice;
    system("COLOR 3F");

    mainmenu();

    scanf("%d",&choice);
    if(choice==1)
    {   year = inputyear();
        daycode = determinedaycode(year);
        determineleapyear(year);
        calendar(year, daycode);
        printf("\n");

    }

	else if(choice == 2)
    {
        jumptodate();
        repeat();
    }

    else if (choice == 3)
    {
        printables();
    }

    else if (choice == 4)
    {
        about();
    }

    else
    {
        wronginput();
        menuselection();

    }

}


int holidaylist()
{
    system("cls");
    printf("\n\n\n\t\t\t\t\t\t LIST OF HOLIDAYS OF 2017\n\n\n\n");

    printf("\t\t\tJan 1-5 :: Midterm Holiday\n\n");
    printf("\t\t\tJan 10 :: Fateha-e-Yajdaham\n\n");
    printf("\t\t\tFeb 1 :: Sharaswati Puja\n\n");
    printf("\t\t\tFeb 15 :: University Day\n\n");

    printf("\t\t\tFeb 21 :: Shaheed Dibas & International Mother Language Day\n\n");
    printf("\t\t\tMar 17 :: Birthday of Father of the Nation Bangabandhu Sheikh Mujibur Rahman\n\n");
    printf("\t\t\tMar 26 :: Independence & National Day \n\n");
    printf("\t\t\tApr 14 :: Pahela Baishakh (Bangla Nababarsha) \n\n");
    printf("\t\t\tApr 16 :: Easter Sunday \n\n");
    printf("\t\t\tApr 25 :: Shab-e-Meraj \n\n");
    printf("\t\t\tMay 1 :: May Day \n\n");
    printf("\t\t\tMay 10 :: Buddha Purnima \n\n");

    printf("\t\t\tMay 12 :: Shab-e-Barat* \n\n");
    printf("\t\t\tJun 4-8 :: Midterm Holiday \n\n");
    printf("\t\t\tJun 20 - 29 :: Shab-e-Qadar, Jummatul Bida & Eid-ul-Fitre*\n\n");


    printf("\t\t\tAug 14 :: Shubha Janmastami \n\n");
    printf("\t\t\tAug 15 :: National Mourning Day \n\n");
    printf("\t\t\tAug 29 - Sep 7 :: Eid-ul-Azha \n\n");

    printf("\t\t\tSep 27-30 :: Durga Puja (Dashami) \n\n");
    printf("\t\t\tOct 1 :: Ashura (Muharram)* \n\n");
    printf("\t\t\tOct 5 :: Lakshmi Puja \n\n");
    printf("\t\t\tNov 15 :: Akheri Chahar Somba \n\n");
    printf("\t\t\tDec 1 :: Eid-e-Milad-un-nabi(SM)* \n\n");
    printf("\t\t\tDec 14 :: Intellectual Martyr's Day \n\n");
    printf("\t\t\tDec 16 :: Bijoy Dibash \n\n");
    printf("\t\t\tDec 25 :: X-mas Day \n\n");
    printf("\t\t\tDec 30 :: Fateha-e-Yajdaham \n\n");

    printf("\n\n\n\t Press 'p' for a printable version of this holiday list \n\t or press any other key for other menu");
    printableversion = getche();
    if(printableversion == 'p')
    {
        system("holidlist.pdf");
    }



    return 0;
}


int jumptodate()
{
    int a;

    system("cls");

    printf("\n\n\n\n\t\t\t\t1.Search");
    printf("\n\n\t\t\t\t2.View a list of holidays in 2017");
    printf("\n\n\n\t\t\t\tEnter your choice : ");
    scanf("%d",&a);
    if(a==2)
        holidaylist();
    else if(a==1)
        main3();
    else
    {
        wronginput();
        jumptodate();
    }
}



int inputyear_forsearching(void)
{
	int year;
	system("cls");

	printf("\n\n\n\n\n\t\t\t\tPlease enter a year (example: 1999) : ");
	scanf("%d", &year);
	return year;
}

int determinedaycode_forsearching(int year)
{
	int daycode;
	int d1, d2, d3;

	d1 = (year - 1.)/ 4.0;
	d2 = (year - 1.)/ 100.;
	d3 = (year - 1.)/ 400.;
	daycode = (year + d1 - d2 + d3) %7;
	return daycode;
}


int determineleapyear_forsearching(int year)
{
	if(year% 4 == FALSE && year%100 != FALSE || year%400 == FALSE)
	{
		days_in_month[2] = 29;
		return TRUE;
	}
	else
	{
		days_in_month[2] = 28;
		return FALSE;
	}
}

void calendar_forsearching(int year, int daycode)
{
	int month, date,x=1, given_month_number;
	int datelimit,q,w;
	char givenmonth[10];

	while (x==1)
    {
        printf("\n\n\t\t\t\tLet us know the month you are looking for.\n\n\t\t\t\t(Example : feb)  \t ");

        scanf("%s",&givenmonth);
        //gets(givenmonth);

        if(strcmp(givenmonth,"jan")==0)
        {
            given_month_number=1;
            datelimit = 31;
            x++;
        }

        else if(strcmp(givenmonth,"feb")==0)
        {
            if(year% 4 == FALSE && year%100 != FALSE || year%400 == FALSE)
            {   given_month_number=2;
                datelimit = 29;
                x++;
            }
            else
            {   given_month_number=2;
                datelimit = 28;
                x++;
            }
        }
        else if(strcmp(givenmonth,"mar")==0)
        {
            given_month_number=3;
            datelimit = 31;
            x++;
        }

        else if(strcmp(givenmonth,"apr")==0)
        {
            given_month_number=4;
            datelimit = 30;
            x++;
        }
        else if(strcmp(givenmonth,"may")==0)
        {
            given_month_number=5;
            datelimit = 31;
            x++;
        }
        else if(strcmp(givenmonth,"jun")==0)
        {
            given_month_number=6;
            datelimit = 30;
            x++;
        }
        else if(strcmp(givenmonth,"jul")==0)
        {
            given_month_number=7;
            datelimit = 31;
            x++;
        }
        else if(strcmp(givenmonth,"aug")==0)
        {
            given_month_number=8;
            datelimit = 31;
            x++;
        }
        else if(strcmp(givenmonth,"sep")==0)
        {
            given_month_number=9;
            datelimit = 30;
            x++;
        }
        else if(strcmp(givenmonth,"oct")==0)
        {
            given_month_number=10;
            datelimit = 31;
            x++;
        }
        else if(strcmp(givenmonth,"nov")==0)
        {
            given_month_number=11;
            datelimit = 30;
            x++;
        }
        else if(strcmp(givenmonth,"dec")==0)
        {
            given_month_number=12;
            datelimit = 31;
            x++;
        }
        else
        {
            system("cls");
            printf("\n\n\n\n\n\n\n\n\t\t\t\t Woops ! May be u made typing mistake. Try again..\n\n");
        }
    }

	printf("\n\n\t\t\t\tAnd at last, the date  :  ");
	scanf("%d",&date);
	if (date>0 && date<=datelimit)
    {

	for ( month = 1; month <= 12; month++ )
	{
		if(month == given_month_number)
		{


		    if((date+daycode)%7==6 || (date+daycode)%7 == 0)
            {
                if(month== 2 && date== 15) { univerday(); }

                else if(month== 2 && date== 21) { motherlanguageday(); }

                else if(month== 3 && date== 17) { sheikhmujibur();}

                else if(month== 3 && date== 26) { independenceday(); }

                else if(month==4 && date==14) {newyr();}

                else if(month== 5 && date== 1) { mayday();}

                else if(month== 8 && date== 15) { mourningday();}

                else if(month== 12 && date== 14) { buddhijibidibosh();}

                else if(month== 12 && date== 16) { victoryday();  }

                else if(month== 12 && date== 25) { christmasday(); }


                else
                {
                    system("cls");
                    printf("\n\n\n\n\n\n\n\n\t\t\t\t Weekly Holiday");
                }

            }


            else if( month==2 )
            {
                if(date == 15)
                {
                    system("cls");
                    univerday();
                }

                else if(date==21)
                    {  system("cls");
                        motherlanguageday();
                    }

                else
                {   system("cls");
                    regularday();

                }

            }

             else if( month== 3)
            {
                if(date == 17)
                    sheikhmujibur();
                else if( date == 26)
                independenceday();
                else
                    regularday();
            }

            else if( month == 4)
            {
                if(date == 14)
                    newyr();
                else
                    regularday();
            }



            else if( month == 5)
            {
                if(date == 1)
                    mayday();
                else
                    regularday();
            }

            else if( month == 8) { if(date == 15 ){mourningday();}  else {regularday();}   }

            else if( month == 12)
            {
             if(date == 14 ){buddhijibidibosh();}
             else if(date == 16 ){victoryday();}
             else if(date == 25 ){christmasday();}

             else {regularday();}
             }

            else
                regularday();
		}


        daycode = ( daycode + days_in_month[month] ) % 7;
	}


    }

    else
    {   system("cls");
        printf("\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t Dates can't be less than 1 or more than %d for %s !\n\n\t\t\t\t\t Search again\n\n", datelimit,givenmonth);
        for(q=1;q<52311;q++)
        for(w=1;w<12331;w++){}
        calendar_forsearching(year, daycode);

    }
}



int main3()
{
    int year, daycode, leapyear;
    system("COLOR 3F");

	year = inputyear_forsearching();
	daycode = determinedaycode_forsearching(year);
	determineleapyear_forsearching(year);
	calendar_forsearching(year, daycode);
	printf("\n");

}

int motherlanguageday()
{
    system("cls");
    printf("\n\n\n\n\n\n");
    printf("\n\n\t\t 21st of February is International Mother Language Day (Public Holiday)\n\n\t\t Short detail :International Mother Language Day is celebrated every year on 21st February. The main purpose of celebrating this day is to\n\t\t promote the awareness of language and cultural diversity all across the world. It was first announced by UNESCO on November 17, 1999. \n\t\t Since then it is being celebrated every year. The date represents the day 21st February 1952 when four young students were killed in Dhaka, \n\t\t the capital of Bangladesh, because of Bengali and Urdu language controversy. Languages are the most powerful way to preserve and develop culture\n\t\t and to promote it all across the world. Because of this unfortunate incident, International Mother Language Day is celebrated in all over the world, \n\t\t while it is a public holiday in Bangladesh.");
    printf("\n\n\n\n\n\t\t Want to know more about this day? Press 'y' to check its article in Wikipedia  ");
    printf("\n\t\t Or press any other key for other option. ");

    webarticle=getche();
    if(webarticle == 'y')
    {
       system("mlangday.htm");
    }

}

int buddhijibidibosh()
{
   system("cls");
   printf("\n\n\n\n\n\n");
    printf("\n\n\t\t December 14 is Martyred Intellectuals Day (Public holiday) \n\n\t\t Short detail : Martyred Intellectuals Day (Shaheed BuddhijibiDibosh) is observed on 14 December in Bangladesh to commemorate those intellectuals \n\t\t\t\twho were killed by Pakistani forces and their collaborators during the 1971 Liberation War, particularly on 25 March and \n\t\t\t\t14 December 1971. Just two days after the 14 December carnage, on 16 December, Bangladesh became independent through the surrender \n\t\t\t\tof Pakistani occupation forces. Pakistani forces and local collaborators like Al-Badr, Al-Shams and Rajakar forces committed the \n\t\t\t\tkillings aiming at annihilating the country's intellectual class. ");
    printf("\n\n\n\n\n\t\t Want to know more about this day? Press 'y' to check its article in Wikipedia  ");
    printf("\n\t\t Or press any other key for other option. ");

    webarticle=getche();
    if(webarticle == 'y')
    {
       system("buddhijibi.htm");
    }

}

int christmasday()
{
   system("cls");
   printf("\n\n\n\n\n\n");
    printf("\n\n\t\t December 25 is Christmas Day (Public holiday) \n\n\t\t Short detail : Christmas Day celebrates the Nativity of Jesus, the date of which according to tradition took place on 25th December 1 BC.\n\t\t\t\t25 December will be a public holiday in most countries around the world.It wasn't until 350 AD, when the then Bishop of Rome, \n\t\t\t\tPope Julius I, fixed the official Christmas day on December 25. The birthday of Jesus Christ, the great founder of the Christian \n\t\t\t\tfaith, falls on 25th of December. Christians believe Jesus Christ to be the son and messenger of God. He is the light of the \n\t\t\t\tworld. Christians believe that if they follow Jesus, then he will remove all the darkness of their life with his light. \n\t\t\t\tHence, we celebrate Christmas Festival on this day. ");
    printf("\n\n\n\n\n\t\t Want to know more about this day? Press 'y' to check its article in Wikipedia  ");
    printf("\n\t\t Or press any other key for other option. ");

    webarticle=getche();
    if(webarticle == 'y')
    {
       system("cmas.htm");
    }

}


int victoryday()
{
   system("cls");
   printf("\n\n\n\n\n\n");
    printf("\n\n\t\t December 16 is Victory Day of Bangladesh (Public holiday) \n\n\t\t Short detail : The holiday is always celebrated on 16 December. Known as 'BijôyDibôs' in Bengali, this holiday commemorates the victory of \n\t\t\t\tthe Allied forces High Command over the Pakistani forces in the Bangladesh Liberation War in 1971. On 25 March 1971, \n\t\t\t\tPakistani troops were used to quell the growing unrest. This marked the start of the War of Independence, also known as \n\t\t\t\tthe War of Liberation.In November 1971, India entered the war, supporting East Pakistan. This led to victory for East Pakistan \n\t\t\t\ton 16 December 1971 with the Pakistan army's surrender to the MuktiBahini at the Race Course Maidan (now SuhrawardyUdyan) in Dhaka.");
    printf("\n\n\n\n\n\t\t Want to know more about this day? Press 'y' to check its article in Wikipedia  ");
    printf("\n\t\t Or press any other key for other option. ");

    webarticle=getche();
    if(webarticle == 'y')
    {
       system("vday.htm");
    }

}

int mourningday()
{
   system("cls");
   printf("\n\n\n\n\n\n");
    printf("\n\n\t\t 15th of August is National Mourning Day (Public holiday) \n\n\t\t Short detail : In Bangladesh, August 15 is observed as National Mourning Day. On this day in 1975, a group of junior army officers killed \n\t\t\t\tSheikh Mujibur Rahman and most of his family.Sheikh MujiburRakhman was the first President of Bangladesh, he is regarded \n\t\t\t\tas the Father of the Nation.  In 1975, a group of military officers staged a coup and assassinated Sheikh Mujib, his wife \n\t\t\t\tand three sons. His two daughters remained alive because they were in West Germany at the time. ");
    printf("\n\n\n\n\n\t\t Want to know more about this day? Press 'y' to check its article in Wikipedia  ");
    printf("\n\t\t Or press any other key for other option. ");

    webarticle=getche();
    if(webarticle == 'y')
    {
       system("mourday.htm");
    }

}

int mayday()
{
   system("cls");
   printf("\n\n\n\n\n\n");
    printf("\n\n\t\t 1st of May is May Day (Public holiday) \n\n\t\t Short detail : This holiday is most commonly associated as a commemoration of the achievements of the labour movement. The holiday may also be \n\t\t\t\tknown as May Day or International Worker's Day.The 1 May date is used because in 1884 the American Federation of Organized Trades \n\t\t\t\tand Labor Unions demanded an eight-hour workday, to come in effect as of 1 May 1886. This resulted in the general strike and the \n\t\t\t\tHaymarket Riot of 1886, but eventually also in the official sanction of the eight-hour workday.1 May is celebrated as Labour Day \n\t\t\t\tin most countries around the world.");
    printf("\n\n\n\n\n\t\t Want to know more about this day? Press 'y' to check its article in Wikipedia  ");
    printf("\n\t\t Or press any other key for other option. ");

    webarticle=getche();
    if(webarticle == 'y')
    {
       system("mday.htm");
    }

}

int newyr()
{
   system("cls");
   printf("\n\n\n\n\n\n");
    printf("\n\n\t\t April 14 is the first day of bengali new year(Public holiday) \n\n\t\t Short detail : Bengali New Year, also known as 'PohelaBoishakh' is the first day in the Bengali calendar.Poila means 'first' and Boishakh is \n\t\t\t\tfirst month of the Bengali calendar.As Bengali New Year is based on a solar calendar it occurs on 14 April in the Gregorian calendar \n\t\t\t\teach yearMughal Emperor Akbar introduced the Bengali calendar in 1556 (Gregorian calendar) to make the collection of land tax easier \n\t\t\t\tin 'Subah Bangla', much of which is now in Bangladesh.Bengali New Year is celebrated at the time as many other new years in the \n\t\t\t\tregion.");
    printf("\n\n\n\n\n\t\t Want to know more about this day? Press 'y' to check its article in Wikipedia  ");
    printf("\n\t\t Or press any other key for other option. ");

    webarticle=getche();
    if(webarticle == 'y')
    {
       system("pahelab.htm");
    }

}


int independenceday()
{
   system("cls");
   printf("\n\n\n\n\n\n");
    printf("\n\n\t\t March 26 is The Independence Day of Bangladesh (Public holiday) \n\n\t\t Short detail : The Independence Day of Bangladesh also referred to as 26 March, is a national holiday. It commemorates the country's declaration \n\t\t\t\tof independence from Pakistan in the late hours of 25 March 1971.During the early hours of 26 March 1971 the independence of \n\t\t\t\tBangladesh was declared by Bongobondhu Sheikh MujiburRahman . The Bangladesh Forces, later with military support from USSR and India, \n\t\t\t\tdefeated the Pakistan Army ending the war on 16 December of that year.The holiday is marked by memorial ceremonies to remember \n\t\t\t\tthose who lost their lives in the war for independence. In the evening, the main public buildings in the capital, Dhaka are lit up \n\t\t\t\tin the national colours.");
    printf("\n\n\n\n\n\t\t Want to know more about this day? Press 'y' to check its article in Wikipedia  ");
    printf("\n\t\t Or press any other key for other option. ");

    webarticle=getche();
    if(webarticle == 'y')
    {
       system("indday.htm");
    }

}

int sheikhmujibur()
{
   system("cls");
   printf("\n\n\n\n\n\n");
    printf("\n\n\t\t March 17 is Birthday of Sheikh Mujibur Rahman (Public holiday) \n\n\t\t Short detail : This national holiday in Bangladesh is observed on 17 March each year.This holiday may also be known as 'Father of the Nation's \n\t\t\t       birth anniversary' and it commemorates the birthday of Sheikh Mujibur Rahman who is regarded as the father of the nation of Bangladesh.\n\t\t\t       Sheikh Mujibur Rahman was born in tungiparaon March 17, 1920.  ");
    printf("\n\n\n\n\n\t\t Want to know more about this day? Press 'y' to check its article in Wikipedia  ");
    printf("\n\t\t Or press any other key for other option. ");

    webarticle=getche();
    if(webarticle == 'y')
    {
       system("mujib.htm");
    }

}

int univerday()
{
    system("cls");
    printf("\n\n\n\n\n\n");
    printf("\n\n\t\t 15th of February is the Foundation Day of BAUST (Holiday)\n\n\t\t Short detail : Bangladesh Army University of Science and Technology (BAUST) is an army-backed private university in Saidpur, Bangladesh.  \n\t\t\t\tIt was established on 15 February 2015.");
    printf("\n\n\t\t Sounds interesing? Press 'y' to go to the website of BAUST.  ");
    printf("\n\t\t Or press any other key for other option. ");

    webarticle=getche();
    if(webarticle == 'y')
    {
       system("verday.htm");
    }

}


int regularday()
{
    system("cls");
    printf("\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\tRegular Day");
}

int about()
{
    system("cls");
    printf("\n\n\n\n\n\t\t\t Love for programming met hard work.. & BAUST Calendar was born.\n\t\t\t This app is fruit of sleepless nights, brainstorm, and many more things.\n\n\n\n\t\t\t Meet the team behind this creation. ");

    printf("\n\n\n\t\t\t Subarna Khorshed\t Press 's' to follow her on Facebook");
    printf("\n\n\t\t\t Rahat Iqbal\t\t Press 'r' to follow him on Facebook");
    printf("\n\n\t\t\t Tusher\t\t         Press 't' to follow him on Facebook");
    printf("\n\n\t\t\t Aishi\t\t         Press 'a' to follow her on Facebook");
    printf("\n\n\t\t\t Or you can press any other key for other options");

    char idchoice;
    idchoice = getche();
    if(idchoice == 's') {system("sub.htm");}
    else if(idchoice == 'a'){system("aishi.htm");}
    else if(idchoice == 't'){system("tushr.htm");}
    else if(idchoice == 'r') {system("rahatiqbal.htm");}


    repeat();

}


int printables()
{
    int cho;
    system("cls");
    printf("\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t 1. Printable Calendar 2017");
    printf("\n\n\t\t\t\t\t\t 2. Printable list of holidays in 2017");
    printf("\n\n\n\n\n\t\t\t\t\t\t Enter your choice   ");


    scanf("%d",&cho);
    if(cho == 1)
        {   system("cal17.pdf");
            repeat();
        }
    else if(cho == 2)
        {   system("holidlist.pdf");
            repeat();
        }
    else
    {
        wronginput();
        printables();
    }

}




