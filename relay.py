import RPi.GPIO as GPIO
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
LIGHTS = 14
GPIO.setup(15,0)
while (True):
	nb = input("enter 0 or 1")
	GPIO.setup(LIGHTS, nb)
