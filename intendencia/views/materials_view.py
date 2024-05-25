from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.shortcuts import get_object_or_404

import datetime

from ..models import Material
from ..serializers.material_serializer import MaterialSerializer

class GetMaterial(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request):
        material = Material.objects.all()
        serializer = MaterialSerializer(material, many=True)
        for item in serializer.data:
            if item['estado'] == 'B' : item['estado'] = "Bueno"
            if item['estado'] == 'R' : item['estado'] = "Regular"
            if item['estado'] == 'M' : item['estado'] = "Malo"
            fecha = datetime.datetime.strptime(item['timestamp'], "%Y-%m-%dT%H:%M:%S.%fZ")
            item['timestamp'] = f"{fecha.day}/{fecha.month}/{fecha.year}"
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        required_fields = ['nombre', 'estado', 'observaciones', 'ultimaActividad', 'ubicacion']
        data = request.data['data']
        for field in required_fields:
            if field not in data:
                return Response({"error": "Todos los datos son requeridos"}, status=status.HTTP_400_BAD_REQUEST)

        new_material = Material.objects.create(
            material = data['nombre'],
            estado = data['estado'],
            observaciones = data['observaciones'],
            ultimaActividad = data['ultimaActividad'],
            ubicacion = data['ubicacion']
        )
        return Response({"mensaje": "exitoso"}, status=status.HTTP_200_OK)

class GetMaterialById(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request, id_material):
        material = get_object_or_404(Material, id=id_material)
        serializer = MaterialSerializer(material)
        x = serializer.data
        if x['estado'] == 'B' : x['estado'] = "Bueno"
        if x['estado'] == 'R' : x['estado'] = "Regular"
        if x['estado'] == 'M' : x['estado'] = "Malo"
        fecha = datetime.datetime.strptime(x['timestamp'], "%Y-%m-%dT%H:%M:%S.%fZ")
        x['timestamp'] = f"{fecha.day}/{fecha.month}/{fecha.year}"
        return Response(x, status=status.HTTP_200_OK)
    
    def put(self, request, id_material):
        required_fields = ['nombre', 'estado', 'observaciones', 'ultimaActividad', 'ubicacion']
        data = request.data['data']
        for field in required_fields:
            if field not in data:
                return Response({"error": "Todos los datos son requeridos"}, status=status.HTTP_400_BAD_REQUEST)

        material = get_object_or_404(Material, id=id_material)
        material.material = data['nombre']
        material.estado = data['estado']
        material.observaciones = data['observaciones']
        material.ultimaActividad = data['ultimaActividad']
        material.ubicacion = data['ubicacion']
        material.save()
        return Response({"mensaje": "Edición con exito"}, status=status.HTTP_200_OK)
