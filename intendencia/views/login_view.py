from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from ..serializers.user_serializer import UserSerializer

class Login(APIView):
    def post(self, request):

        user = get_object_or_404(User, username=request.data['username'])

        # check_password compara string con un dato ya encriptado
        if not user.check_password(request.data['password']):
            return Response({'error': 'Invalid password'}, 
                            status=status.HTTP_400_BAD_REQUEST)
        
        token,created = Token.objects.get_or_create(user=user)

        serializer = UserSerializer(instance=user)

        return Response({"token": token.key, "user": serializer.data},
                         status=status.HTTP_200_OK) 

class Profile(APIView):
    # precisa token en el header
    authentication_classes = [TokenAuthentication]
    # ruta protegida
    permission_classes = [IsAuthenticated]
    def post(self, request):
        print(request.user)
        return Response(f"You are loging with {request.user.username}",status=status.HTTP_200_OK) 
