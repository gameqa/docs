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

Once you're on the page for dynamic email templates you can click "Create a Dynamic Template" in the top right corner.

![](../_media/sg_dynamic_templates_view.png)

In the creation form, give the template a memorable name that describes the template like so:

![](../_media/sg_create_dynamic_template.png)

Once you've created the template you'll see that it currently has no versions. Click "Add Version"

![](../_media/sg_created_template_no_version.png)

When prompted with the choice, select "Blank Template".

![](../_media/sg_create_version_1.png)

Then proceed to the "Code Editor"

![](../_media/sg_create_version_2.png)

Once you're in the code editor you will see two tabs in the top left corner. One that says "code" and another one that says "test data". The code tab should have some default HTML code. Add the following HTML line into the editor

```html
<p>{{verificationCode}}</p>
```

The result should look something like this:

![](../_media/sg_verificationcode.png)

Now, in the "test data" tab add this JSON:

```json
{
    "verificationCode": "123456"
}
```

The outcomee should look something like this.

![](../_media/sg_verification_dynamic_data.png)

If you can see the HTML preview on the right side update with the number you typed in "test data" then this template is ready

**IMPORTANT:** Hit "Save" to save your progress.

**NOTE:** you can style this with HTML and CSS

Lastly, create another template for resetting your password by following the same steps **except** the string injected into the template is called `resetPasswordCode` instead of `verificationCode`. Make sure to set up the HTML and test data accordingly.

## Sender Authentication

In order to send emails via Sendgrid, you need to have control over a domain. This could either be a domain that you reserve for the data collection OR it could be your institutions (universities) domain. This is essentially the domain any emails will be sent from when using sendgrid.

Start by selecting "Sender Authentication" from the left-side navigation bar.

![](../_media/sg_menu_sender_auth.png)

Once you're there press "Activate your domain". You will see a series to step which are quite easy to follow. The only requirement here is that you have access to the DNS records for your domain or can send instructions to a systems administrator to do this for you.

![](../_media/sg_sender_auth_1.png)

Next, choose your DNS provider.

![](../_media/sg_sender_auth_2.png)

Fill out the name of your domain like so:

![](../_media/sg_sender_auth_3.png)

Lastly, you will see a list of DNS records which you will need to add to your domain. Sendgrid offers you to do this automatically, manually, or forward this to a coworker (your domain administrator)
![](../_media/sg_sender_auth_4.png)

Once everything is set up you can click this button to verify that the setup is correct. Once it passes all the tests you will be ready to start sending emails with this domain.

![](../_media/sg_sender_auth_5.png)

## Api Keys

In order to be able to invoke the Sendgrid API in our server / API we will need an API key from Sendgrid. Start off by navigating to the API Keys section under Settings in the left-side navigation bar.

![](../_media/sg_menu_api_keys.png)

Now, press "Create API Key".
 
![](../_media/sg_api_keys_view.png)

Give the key full access.
![](../_media/sg_api_key_create_form.png)

Once you're done creating the API key you will see it on your screen. Copy it and save it in a safe location. You will not be able to retrieve this key once you've navigated from this page. Keep the API key safe since anyone with the API key can send emails in your name.

![](../_media/sg_api_key_created.png)

## Updating Environment Variables

Now that you've completed the Sendgrid setup you can add the Sendgrid api key to your environment file in the API repo. Add this line along with the value (sendgrid API key)

```
# Sendgrid API key
SENDGRID_KEY= ...
```

## Registering Templates in the API codebase

The dynamic templates you created above generated template IDs which you can find in your Sendgrid portal. Now you need to navigate to `src/services/DynamicEmailTemplates/interface.ts` in the API code. There you will find two TypeScript interfaces called `SignupTemplateData` and `ResetPasswordTemplateData` respectively. They look something like this:

```ts
export interface SignupTemplateData {
    templateId: "d-00000000000000000000000000000001";
    data: {
        foo: string;
    };
}

export interface ResetPasswordTemplateData {
    templateId: "d-00000000000000000000000000000002";
    data: {
        turtles: [
            {name: "foo", age: 100},
            {name: "bar", age: 102}
        ],
    }
}

```

Now, you need to replace the `templateId` string in both with their respective dynamic template ID from Sendgrid.

**NOTE:** the templateId needs to be the exact string identifying the template.

## Export the Template ID

Next, you need to `export` the template IDs along with the default sender from your domain. IMPORTANT: these strings must match the ones in the interface declerations. Also, change the `DEFAULT_SENDER` variable to the sender you want to show up in your users inbox. The email needs to come from a domain which you've registered with Sendgrid

```ts
export const DEFAULT_SENDER = "noreply@gameqa.app";
export const REGISTER_USER_TEMPLATE = "d-00000000000000000000000000000001";
export const RESET_PW_CODE_TEMPLATE = "d-00000000000000000000000000000002";
```

## Testing Sendgrid Integration
🚧 🏗 🔨👷 We're still working on this!
