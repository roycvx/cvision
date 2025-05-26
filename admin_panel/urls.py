from django.urls import path
from . import views

urlpatterns = [
    path('', views.showApplicant, name='show-applicant'),
    path('show-admin', views.showAdmin, name='show-admin'),
]