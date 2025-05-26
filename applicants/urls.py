from django.urls import path
from . import views

urlpatterns = [
    path('form-applicant', views.showFormApplicant, name='form-applicant' ),
]