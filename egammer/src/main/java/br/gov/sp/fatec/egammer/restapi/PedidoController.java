package br.gov.sp.fatec.egammer.restapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import br.gov.sp.fatec.egammer.domain.venda.Pedido;
import br.gov.sp.fatec.egammer.domain.venda.PedidoService;
import br.gov.sp.fatec.egammer.util.View;

@RestController
public class PedidoController {
	
	
	@Autowired
	private PedidoService service;
	
	@RequestMapping(value = "/pedido", method = RequestMethod.POST)
	public ResponseEntity<Pedido> salvar(@RequestBody Pedido pedido){
		service.salvar(pedido);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(value = "/pedido/id", method = RequestMethod.GET)
	@JsonView( View.Pedido.class)
	public ResponseEntity<Pedido> buscaPorId(@RequestParam("codigo") final Long codigo) {
		return new ResponseEntity<>(service.buscarPorId(codigo),HttpStatus.OK);
	}
	
}
