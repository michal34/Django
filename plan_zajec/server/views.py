from django.http import JsonResponse
from pymongo import MongoClient

client = MongoClient('mongodb+srv://xxxxxx:xxxxxxxxxxxxx@cluster0.zfvtf.mongodb.net/techni?retryWrites=true&w=majority')
db = client['techni']

def classesApi(request):

    classes = db.classes.find()
    classesDB = []

    for classObj in classes:
        classObj['_id'] = str(classObj['_id'])
        classesDB.append(classObj)

    classesReponse = {"classes": classesDB, "success": True}

    return JsonResponse(classesReponse, safe=False)

def subjectsApi(request):

    subjects = db.subjects.find()
    subjectsDb = []

    for subjectObj in subjects:
        subjectObj['_id'] = str(subjectObj['_id'])
        subjectsDb.append(subjectObj)

    subjectsResponse = {"subjects": subjectsDb, "success": True}

    return JsonResponse(subjectsResponse, safe=False)

def plansApi(request, id):

    plans = db.plans.find()
    plansDb = "siema"
    
    for planObj in plans:
        planObj['_id'] = str(planObj['_id'])

        if id == planObj['classId']:
            plansDb = planObj

    plansResponse = {"plans": plansDb, "success": True}

    return JsonResponse(plansResponse, safe=False)