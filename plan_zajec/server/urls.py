from django.urls import path
from . import views

urlpatterns = [
    path('api/front/classes', views.classesApi),
    path('api/front/subjects', views.subjectsApi),
    path('api/front/plans/<str:id>', views.plansApi),
]