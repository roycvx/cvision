from django.urls import path
from . import views

urlpatterns = [
    path('', views.show_start_page, name='start-page') # Ruta para mostrar la pagina de inicio
]