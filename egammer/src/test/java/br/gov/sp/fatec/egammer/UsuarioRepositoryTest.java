package br.gov.sp.fatec.egammer;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import br.gov.sp.fatec.egammer.authentication.SegurancaServiceImpl;
import br.gov.sp.fatec.egammer.domain.usuario.Usuario;
import br.gov.sp.fatec.egammer.domain.usuario.UsuarioRepository;


//@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration(locations = { "classpath:/applicationContext.xml" })
//@Transactional
public class UsuarioRepositoryTest {
	
	/*@Autowired
	private UsuarioRepository repository;
	

	
	@Test
	public void login(){
		Usuario usuario = repository.buscarPorLoginESenha("edu@hotmail.com", "1234");
		System.out.println(usuario.getNome());
	}
	
	@Test
	public void login(){
		Usuario usuario = repository.findByEmail("edu@hotmail.com");
		System.out.println(usuario.getNome());
	}*/
	
	
}
