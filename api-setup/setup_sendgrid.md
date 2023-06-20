# Setting up SendGrid

Sendgrid 
is an email service that sends signup and other standardized emails from GameQA. In order to a get a service like Sendgrid
to work there needs to be a certain level of integration and setup. However, we've taken care of most of the integration
so you will only need to add what is absolutely necessary.

Sendgrid is a paid service, however, the volume of emails sent out by the system is so low that it will likely qualify for a free tier throughout the data collection

## Creating an account
Start by creating an account on [Sendgrid](https://app.sendgrid.com).

## Creating Templates
Sendgrid allows you to create what they call "dynamic templates". With these dynamic templates you can send standardized emails to users with dynamic data (such as  verification codes) sent from our API. You will need to create two such templates. One for verification codes on sign-up and one for users when they reset their passwords. The logic to send these emails is already embedded into the API, now we just need to create (or register) templates in your [Sendgrid Portal](https://app.sendgrid.com) that display these codes. 

Start by navigating to the sidebar to find the dynamic email template page. 

![](../_media/sg_menu_dynamic_demplates.png)

## Sender Authentication

## Api Keys

## Updating Environment Variables

## Updating API Codebase

## Testing Sendgrid Integration
