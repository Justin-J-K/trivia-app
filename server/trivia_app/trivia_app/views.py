from django.http import JsonResponse, HttpResponseBadRequest, HttpResponse
from django.views import View
import json
from .models import Player

class TopPlayersView(View):
    def get(self, _):
        players = Player.objects.order_by('-score')[:10]
        data = [{'name': player.name, 'score': player.score} for player in players]
        return JsonResponse({'scores': data})
    
class AddPlayerView(View):
    def put(self, request):
        try:
            body = json.loads(request.body)
            name = body['name']
            score = body['score']
            Player.objects.create(name=name, score=score)
            return HttpResponse(status=201)
        except (KeyError, json.JSONDecodeError):
            return HttpResponseBadRequest()