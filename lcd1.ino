#include<LiquidCrystal.h>

LiquidCrystal lcd(2,3,4,5,6,7);

void setup()
{
                         
 lcd.begin(16, 2);
  lcd.print("    HI   ");
  lcd.setCursor(0,1);
  lcd.print("   THIS IS KAVYASRI   ");
  delay(3000);
  lcd.clear();
  lcd.setCursor(0,0);
  
  delay(3000);
   
  
}
void loop()
{
  lcd.clear();
  String myString = "   WELCOME TO KITS  ";
  lcd.setCursor(0,0);
  lcd.print(myString);
  
for (int scrollCounter = 0; scrollCounter < 65; scrollCounter++)
  {

    lcd.scrollDisplayRight();

    delay(250);
  }

  lcd.clear();
}
