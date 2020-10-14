int m1a=13;
int m1b=8;
int m2a=A0;
int m2b=A5;
#define bp2 5
#define bp1 4
#define bp3 6
#define bp4 7
void setup()
{
pinMode(m1a,OUTPUT);
pinMode(m1b,OUTPUT);
pinMode(m2a,OUTPUT);
pinMode(m2b,OUTPUT);
pinMode(bp1,INPUT);
pinMode(bp2,INPUT);
pinMode(bp3,INPUT);
pinMode(bp4,INPUT);

}
void loop()
{
if(digitalRead(bp1)==LOW)
{
  digitalWrite(m1a,HIGH);
digitalWrite(m1b,LOW);
digitalWrite(m2a,HIGH);
digitalWrite(m2b,LOW);
}
if(digitalRead(bp2)==LOW)
{
digitalWrite(m1a,LOW);
digitalWrite(m1b,HIGH);
digitalWrite(m2a,LOW);
digitalWrite(m2b,HIGH);
}
if(digitalRead(bp3)==LOW)
{
  digitalWrite(m1a,HIGH);
digitalWrite(m1b,LOW);
digitalWrite(m2a,LOW);
digitalWrite(m2b,HIGH);
  }
if(digitalRead(bp4)==LOW)
{
  digitalWrite(m1a,LOW);
digitalWrite(m1b,HIGH);
digitalWrite(m2a,HIGH);
digitalWrite(m2b,LOW);
  }  
  



}
