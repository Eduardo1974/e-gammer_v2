package br.gov.sp.fatec.egammer.restapi;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import br.gov.sp.fatec.egammer.domain.game.Game;
import br.gov.sp.fatec.egammer.domain.game.GameService;
import br.gov.sp.fatec.egammer.util.View;

@RestController
public class GameController {

	@Autowired
	private GameService service;

	@RequestMapping(value = "/game", method = RequestMethod.POST)
	public ResponseEntity<Game> salvar(@RequestBody Game game) {
		service.salvar(game);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@RequestMapping(value = "/game", method = RequestMethod.DELETE)
	public ResponseEntity<?> deletar(@RequestParam("codigo") final Long codigo) {
		service.excluir(codigo);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@RequestMapping(value = "/game/all", method = RequestMethod.GET)
	@JsonView(View.Game.class)
	public ResponseEntity<List<Game>> buscaTodos() {
		return new ResponseEntity<>(service.buscarTodos(), HttpStatus.OK);
	}

	@RequestMapping(value = "/game/id", method = RequestMethod.GET)
	@JsonView(View.Game.class)
	public ResponseEntity<Game> buscaPorId(@RequestParam("codigo") final Long codigo) {
		return new ResponseEntity<>(service.buscarPorId(codigo), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/game/buscaGenero", method = RequestMethod.GET)
	@JsonView( View.Game.class)
	public ResponseEntity<List<Game>> buscarPorGenero(@RequestParam("codigo") final Long codigo) {
		return new ResponseEntity<>(service.buscarPorGenero(codigo), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/game/buscaTitulo", method = RequestMethod.GET)
	@JsonView( View.Game.class)
	public ResponseEntity<List<Game>> buscarPorTitulo(@RequestParam("titulo") final String titulo) {
		return new ResponseEntity<>(service.buscaPorTitulo(titulo), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/game/buscaDestaques", method = RequestMethod.GET)
	@JsonView( View.Game.class)
	public ResponseEntity<List<Game>> buscaDestques() {
		return new ResponseEntity<>(service.buscaDestques(), HttpStatus.OK);
	}
	
}
