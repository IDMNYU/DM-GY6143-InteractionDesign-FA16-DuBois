int v1 = 0; // this stores the value of the sensor (0-1023)
int v2 = 0; // this stores the value of the sensor (0-1023)
int v3 = 0; // this stores the value of the sensor (0-1023)

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600); // talks back to computer
}

void loop() {
  // put your main code here, to run repeatedly:
  v1 = analogRead(A0); // read the analog pin
  v2 = analogRead(A1); // read the analog pin
  v3 = analogRead(A2); // read the analog pin
  Serial.print(v1); // send the value over serial
  Serial.print(" "); // send the value over serial
  Serial.print(v2); // send the value over serial
  Serial.print(" "); // send the value over serial
  Serial.print(v3); // send the value over serial
  Serial.println();
  delay(10); // hang on a sec
}
