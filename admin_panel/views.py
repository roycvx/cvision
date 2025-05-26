from django.shortcuts import render

# Create your views here.

def showApplicant(request):

    return render(request, 'admin_panel/applicant.html')

def showAdmin(request):
    return render(request, 'admin_panel/admin.html')
