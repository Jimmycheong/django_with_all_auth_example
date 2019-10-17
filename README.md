# Django-allauth Example
An example demonstrating how to incorporated django-allauth into a django project

## How to run project

1. Firstly clone the repo
```
git clone https://github.com/Jimmycheong/django_with_all_auth_example.git
cd django_with_all_auth_example

```

2. Build a virtualenv

```
virtualenv env
source env/bin/activate
pip install -r requirements.txt
```

3. Migrate to populate sqlite3 DB and run the server
```
python manage.py migrate
python manage.py runserver
```

4. Go to the home page by opening: `http://localhost:8000`


## Requirements
- Set up the required API key and secrets with the providers (Facebook API, Google API, etc.)
- To use the OAuth Apps, you have to add them into the Social Apps model within the Django admin UI.
- With Google, after you have created a client ID:
 - Add Authorized JavaScript origins as your domain name (`http:localhost:8000` if running locally)
 - Add Authorized JavaScript origins as your domain name (	`http://localhost:8000/accounts/google/login/callback/` if running locally)
- Logout must be performed using a `POST` request
  - Django requires a CSRFToken, which will be sent as a header: `'X-CSRFToken':<csrftoken>`
   - It can be grabbed using this in your Javascript file: `var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();`
   - Set the following to `True` in `settings.py` file: `CSRF_USE_SESSIONS` or `CSRF_COOKIE_HTTPONLY`

References:
- https://www.youtube.com/watch?v=-TUEM2NCuVE
- https://django-allauth.readthedocs.io/en/latest/installation.html
- https://docs.djangoproject.com/en/dev/ref/csrf/#ajax
- https://django-allauth.readthedocs.io/en/latest/views.html#logout-account-logout
