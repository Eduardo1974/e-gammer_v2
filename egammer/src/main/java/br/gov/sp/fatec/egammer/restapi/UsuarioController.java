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

import br.gov.sp.fatec.egammer.domain.usuario.Usuario;
import br.gov.sp.fatec.egammer.domain.usuario.UsuarioService;
import br.gov.sp.fatec.egammer.util.View;

@RestController
public class UsuarioController {
	
	
	@Autowired
	private UsuarioService service;

	@RequestMapping(value = "/usuario", method = RequestMethod.POST)
	public ResponseEntity<Usuario> salvar(@RequestBody Usuario usuario) {
		service.salvar(usuario);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@RequestMapping(value = "/usuario", method = RequestMethod.DELETE)
	public ResponseEntity<?> deletar(@RequestParam("codigo") final Long codigo) {
		service.excluir(codigo);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(value = "/usuario/login", method = RequestMethod.POST)
	@JsonView( View.Login.class)
	public ResponseEntity<Usuario> login(@RequestBody Usuario usuario) {
		Usuario usu = service.buscarPorLoginESenha(usuario.getUsername(), usuario.getPassword());
		System.out.println(usu.getNome());
		return new ResponseEntity<>(usu, HttpStatus.OK);
	}
	

	@RequestMapping(value = "/usuario/id", method = RequestMethod.GET)
	@JsonView(View.Usuario.class)
	public ResponseEntity<Usuario> buscaPorId(@RequestParam("codigo") final Long codigo) {
		return new ResponseEntity<>(service.buscarPorId(codigo), HttpStatus.OK);
	}

}
