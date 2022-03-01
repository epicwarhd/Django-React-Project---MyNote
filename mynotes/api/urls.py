from django.urls import path
from . import views

urlpatterns = [
    path('note/',views.getNotes, name='notes'),
    path('note/create',views.createNote, name='create-note'),
    path('note/<str:pk>/update',views.updateNote, name='update-note'),
    path('note/<str:pk>/delete',views.deleteNote, name='delete-note'),
    path('note/<str:pk>',views.getNote, name='note')
]
