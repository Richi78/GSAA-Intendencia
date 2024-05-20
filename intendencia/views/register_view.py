from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User

#serializers
from ..serializers.user_serializer import UserSerializer

class Registar(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = User.objects.get(username=serializer.data['username'])
            user.set_password(serializer.data['password'])
            user.save()

            token = Token.objects.create(user=user)
            return Response({'token': token.key, 'user': serializer.data}, 
                            status=status.HTTP_201_CREATED)

        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)