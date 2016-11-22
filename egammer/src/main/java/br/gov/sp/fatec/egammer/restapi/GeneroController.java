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

import br.gov.sp.fatec.egammer.domain.genero.Genero;
import br.gov.sp.fatec.egammer.domain.genero.GeneroService;

@RestController
public class GeneroController {
	
	@Autowired
	private GeneroService service;

	@RequestMapping(value = "/genero", method = RequestMethod.POST)
	public ResponseEntity<Genero> salvar(@RequestBody final Genero genero){
		service.salvar(genero);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@RequestMapping(value = "/genero", method = RequestMethod.DELETE)
	public ResponseEntity<?> deletar(@RequestParam("codigo") final Long codigo) {
		service.excluir(codigo);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@RequestMapping(value = "/genero/all", method = RequestMethod.GET)
	public ResponseEntity<List<Genero>> buscaTodos() {
		return new ResponseEntity<>(service.buscarTodos(), HttpStatus.OK);
	}

	@RequestMapping(value = "/genero/id", method = RequestMethod.GET)
	public ResponseEntity<Genero> buscaPorId(@RequestParam("codigo") final Long codigo) {
		return new ResponseEntity<>(service.buscarPorId(codigo),HttpStatus.OK);
	}
	
}
