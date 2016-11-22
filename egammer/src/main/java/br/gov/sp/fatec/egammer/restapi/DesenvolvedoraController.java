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

import br.gov.sp.fatec.egammer.domain.desenvolvedora.Desenvolvedora;
import br.gov.sp.fatec.egammer.domain.desenvolvedora.DesenvolvedoraService;
import br.gov.sp.fatec.egammer.util.View;

@RestController
public class DesenvolvedoraController {
		
	@Autowired
	private DesenvolvedoraService service;

	@RequestMapping(value = "/desenvolvedora", method = RequestMethod.POST)
	public ResponseEntity<Desenvolvedora> salvar(@RequestBody Desenvolvedora desenvolvedora){
		service.salvar(desenvolvedora);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	

	@RequestMapping(value = "/desenvolvedora", method = RequestMethod.DELETE)
	public ResponseEntity<?> deletar(@RequestParam("codigo") final Long codigo) {
		service.excluir(codigo);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@RequestMapping(value = "/desenvolvedora/all", method = RequestMethod.GET)
	public ResponseEntity<List<Desenvolvedora>> buscaTodos() {
		return new ResponseEntity<>(service.buscarTodos(), HttpStatus.OK);
	}

	@RequestMapping(value = "/desenvolvedora/id", method = RequestMethod.GET)
	@JsonView( View.Desenvolvedora.class)
	public ResponseEntity<Desenvolvedora> buscaPorId(@RequestParam("codigo") final Long codigo) {
		return new ResponseEntity<>(service.buscarPorId(codigo),HttpStatus.OK);
	}

}
