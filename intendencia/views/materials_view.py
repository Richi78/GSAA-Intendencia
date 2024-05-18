from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

from ..models import Material
from ..serializers.material_serializer import MaterialSerializer

class GetMaterial(APIView):
    def get(self, request):
        material = Material.objects.all()
        serializer = MaterialSerializer(material, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        pass
