package br.gov.sp.fatec.egammer;

import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import br.gov.sp.fatec.egammer.domain.desenvolvedora.Desenvolvedora;
import br.gov.sp.fatec.egammer.domain.desenvolvedora.DesenvolvedoraRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:/applicationContext.xml" })
@Transactional
public class DesenvolvedoraRepositoryTest {
	
	
	@Autowired
	private DesenvolvedoraRepository repository;
	
	@Test
	public void getAll(){
		List<Desenvolvedora> desenvolvedoras = repository.buscarTodos();
		Assert.assertNotNull(desenvolvedoras);
	}
}
